import '../styles/filter.css'

export function Filter () {
    return (
       <section className={"filter"}>
           <label htmlFor="filter"></label>
           <input type="text" id={"filter"} name={"filter"}
                  placeholder={"Search..."}/>
           <button>Search</button>
       </section>
    );
}
