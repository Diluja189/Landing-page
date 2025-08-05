function Template(){
    const name="diluja";
    const age=23;
    const content=`my name is ${name} & my age is ${age}`;
return(
<>

<div>
    <h1 className="hg dark text white">
        {content}

    </h1>
</div>
</>


);

}
export default Template;