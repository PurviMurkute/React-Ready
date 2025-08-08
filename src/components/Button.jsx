import { TiArrowRight } from "react-icons/ti";

const Button = ({btnText, onClick, icon}) => {
    const icons = {
        arrow : <TiArrowRight className="inline text-2xl" />
    }
  return (
    <div>
      <button className='bg-[#38bdf8] text-[#0e172e] font-medium px-5 py-2 rounded-lg my-5 cursor-pointer' onClick={onClick}>{btnText}{icons[icon]}</button>
    </div>
  )
}

export default Button
