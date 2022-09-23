import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({messages = []}) {

	const {user} = useSelector(state => state.auth) || {};
	const {email} = user || {};
	return (
		<div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
			<ul className="space-y-2">   
			<InfiniteScroll
			 dataLength={messages?.length} 
			 next={() => console.log('hi')}
			 style={{ display: 'flex', flexDirection: 'column-reverse' }}
			
			 hasMore={true}
			 loader={<h4>Loading...</h4>}
			 height={window.innerHeight - 129}
			>
				{messages
				.slice()
				.sort((a, b) =>  b.timestamp - a.timestamp )
				.map((message) => {
					const {message: lastMessage, id, sender} = message || {};

					const justify = sender.email !== email ? 'start' : 'end';

					return(
						<Message key={id} justify={justify} message={lastMessage} />
					)
				})}
				</InfiniteScroll> 
			</ul>
		</div>
	);
}
