import { EditableProfileCard } from '@/features/EditableProfileCard'
import { VStack } from '@/shared/ui/Stack'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'

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