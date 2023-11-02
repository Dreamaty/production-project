import { EditableProfileCard } from 'features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { Page } from 'widgets/Page/Page'

const ProfilePage = () => {
	
	const { id } = useParams<{id: string}>()

	return (
		<Page>
			<VStack gap='16' max>
				<EditableProfileCard id={id!} />
			</VStack>
		</Page>
	)
}

export default ProfilePage