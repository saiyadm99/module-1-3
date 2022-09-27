import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditTeamMutation } from "../../features/teams/teamsApi";
import { useGetUserQuery } from "../../features/users/usersApi";
import isValidateEmail from "../../utils/isValidEmail";
import Error from "../ui/Error";
import Success from "../ui/Success";

const AddMemberModal = ({ open, control, team }) => {
	const dispatch = useDispatch();
	const [to, setTo] = useState('');
	const [existWarning, setExistWarning] = useState(false);
	const [addedWarning, setAddedWarning] = useState(false);
	const [addMember , setAddmember] = useState(false);
	const [userCheck, setUserCheck] = useState(false);
	const [memberExist, setMemberExist] = useState(undefined);

	const [responseError, setResponseError] = useState('');

	const {user: loggedInUser} = useSelector(state => state.auth) || {};
	const {email: myEmail} = loggedInUser || {};

	const {data: participant} = useGetUserQuery(to, {
		skip: !userCheck
	});

	const [editTeam, {isError, error}] = useEditTeamMutation();

	useEffect(() => {
		if(participant?.length > 0 && participant[0].email !== myEmail){
			setAddmember(true)
			
			if(team.members.includes(to)){
				setMemberExist(true)
			}else{
				setMemberExist(false)
			}
		} else {
			setAddmember(false)
		}
	},[participant, dispatch, myEmail, to, team.members]);

	// listen conversation add/edit success
	useEffect(() => {
		if( isError || error) {
			setResponseError(error.message)
		}
	}, [isError, error])

	const debounceHandler = (fn, delay) => {
		let timeOutId;
		return(...args) => {
			clearTimeout(timeOutId);
			timeOutId = setTimeout(() => {
				fn(...args)
			}, delay);
		}
	}
	const doSearch = (value) => {
		if(isValidateEmail(value)) {
			// check user API
			setUserCheck(true)
			setTo(value);
		} else {
		}
	}

	//console.log(`userCheck ${userCheck}`)

	const handleSearch = debounceHandler(doSearch, 500);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit')
		
		if(addMember && memberExist) {
			setExistWarning(true);
			setTimeout(() => {
				setExistWarning(false)
			}, 1800);
		}

		if(addMember && !memberExist) {
			editTeam({
				id: team.id,
				data: {
					members: [...team.members, to]
				}
			})
			setAddedWarning(true);
			setTimeout(() => {
				setAddedWarning(false)
			}, 1800);
		}
	}

	return (
		open && (
			<>
				<div
					onClick={control}
					className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
				></div>
				<div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
								Add member
						</h2>
						<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
							<div className="rounded-md shadow-sm -space-y-px">
								<div>
									<label htmlFor="to" className="sr-only">
										To
									</label>
									<input
										id="to"
										name="to"
										type="email"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
										placeholder="Enter Email"
										onChange={(e) => handleSearch(e.target.value)}
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
									disabled={!addMember && !memberExist}
								>
									Add Member
								</button>

								<button
									className="group relative mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
									disabled={false}
									onClick={control}
								>
									Close
								</button>
							</div>

							{participant?.length === 0 && (<Error message="This user does not exist!" />)}

							{participant?.length > 0  && participant[0].email !== myEmail && !existWarning && !addedWarning && (<Success message="This is a Valid user" />)}

							{existWarning && (<Success message="User already added to the team!" />)}

							{addedWarning && (<Success message="Member Added Successfully!" />)}

							{participant?.length > 0 && participant[0].email === myEmail && (<Error message="You can not add yourself!" />)}


							{responseError && (<Error message={responseError} />)}
						</form>
				</div>
			</>
		)
	);
}

export default AddMemberModal;