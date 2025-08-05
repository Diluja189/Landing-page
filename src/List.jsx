function List(){
const district=["jaffna","kilinochchi","kandy"];

return(
<>
<ul>
<li>{district[0]}</li>
<li>{district[1]}</li>
<li>{district[2]}</li>

</ul>

<ul>
{district.map((dis)=>{
<li>{dis}</li>
})}
</ul>
</>

);



}
export default List;