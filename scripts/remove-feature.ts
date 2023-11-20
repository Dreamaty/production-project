import {
  JsxAttribute,
  Node,
  Project,
  SyntaxKind,
} from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (
  !removedFeatureName &&
  featureState !== 'on' &&
  featureState !== 'off'
)
  throw new Error(
    'You need to write like this:' +
      '\n[pathToScript] removedFeatureName featureState(on,off)',
  );

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }
  return value;
};

function isToggleFunction(node: Node) {
  const identifier = node.getFirstDescendantByKind(
    SyntaxKind.Identifier,
  );

  return identifier?.getText() === toggleFunctionName;
}

function getIdentifier(node: Node) {
  return node.getFirstDescendantByKind(SyntaxKind.Identifier);
}

function isToggleComponent(node: Node) {
  const identifier = getIdentifier(node);

  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );
  if (!objectOptions) {
    return;
  }

  const featureNameProperty = objectOptions.getProperty('name');

  const onFunctionProperty = objectOptions.getProperty('on');
  const offFunctionProperty = objectOptions.getProperty('off');

  const onFunction =
    onFunctionProperty?.getFirstDescendantByKind(
      SyntaxKind.ArrowFunction,
    );
  const offFunction =
    offFunctionProperty?.getFirstDescendantByKind(
      SyntaxKind.ArrowFunction,
    );

  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getAttributeNodeByName = (
  jsxAttribute: JsxAttribute[],
  name: string,
) => {
  return jsxAttribute.find(
    node => getIdentifier(node)?.getText() === name,
  );
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(
    SyntaxKind.JsxAttribute,
  );

  const onAttribute = getAttributeNodeByName(attributes, 'on');

  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(
    attributes,
    'feature',
  );
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const onValue = getReplacedComponent(onAttribute);
  const offValue = getReplacedComponent(offAttribute);

  if (featureState === 'on' && onAttribute) {
    node.replaceWithText(onValue.getText());
  }
  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue.getText());
  }
};

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if (
      node.isKind(SyntaxKind.CallExpression) &&
      isToggleFunction(node)
    ) {
      replaceToggleFunction(node);
    }
    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleComponent(node)
    ) {
      replaceToggleComponent(node);
    }
  });
});

project.save();
