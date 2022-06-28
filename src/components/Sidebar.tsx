import { gql, useQuery } from '@apollo/client';
import { Boulder } from './Boulder';

const GET_BOULDERS_QUERY = gql`
	query {
		boulders(orderBy: updatedAt_DESC, stage: PUBLISHED) {
			id
			name
			slug
			description
			conditions
			videourl
			updatedAt
			photos {
				fileName
			}
			location {
				latitude
				longitude
			}
		}
	}
`;

interface GetBouldersQueryResponse {
	boulders: {
		id: string;
		name: string;
		slug: string;
		description: string;
		conditions?: string;
		videourl?: string;
		updatedAt: string;
		photos?: {
			fileName: string;
		};
		location?: {
			latitude: string;
			longitude: string;
		};
	}[];
}

export function Sidebar() {
	const { data } = useQuery<GetBouldersQueryResponse>(GET_BOULDERS_QUERY);

	return (
		<aside className="w-80 bg-gray-700 p-6 border-l	border-gray-600">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Setores de climb
			</span>

			<div className="flex flex-col gap-8">
				{data?.boulders.map((boulder) => {
					return (
						<Boulder
							key={boulder.id}
							name={boulder.name}
							slug={boulder.slug}
							description={boulder.description}
							updatedAt={boulder.updatedAt}
						/>
					);
				})}
			</div>
		</aside>
	);
}
