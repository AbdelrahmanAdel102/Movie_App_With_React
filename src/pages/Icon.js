

import {  AiFillHeart,AiOutlineHeart } from "react-icons/ai";
	import { useSelector, useDispatch } from "react-redux";
	import { setTheme } from "../store/action";
	
	export default function ChangeTheme() {
		const theme = useSelector((state) => state.theme)
		const dispatch = useDispatch();
		const changemytheme = () => {
			dispatch(setTheme(theme == <AiFillHeart /> ? <AiOutlineHeart /> : <AiFillHeart />))
			console.log(theme)
		}
	return (
		<div className="btn" style={{ color: 'red' }} size={30}><AiOutlineHeart/> </div>
	)
}
