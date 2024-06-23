import ButtonLeft from "./ButtonLeft";


// eslint-disable-next-line react/prop-types
function LeftWrapper({onClick}) {
  return (
    <>
    <aside className="">
        <div>
            <ButtonLeft onClick={onClick}/>
        </div>
    </aside>
    
    </>
  );
}

export default LeftWrapper;
