import React,{useState, useEffect} from 'react'

const App = () => {
  const [activity, setactivity] = useState({
    mytext:"",
    myArray:[],
    isEnable:false,
    indexofEdit:"",
    newVal:""
  })

  const add =()=>{
    const addArray = [...activity.myArray,{mytext:activity.mytext}];

    setactivity(
      {
        ...activity,
        myArray:addArray,
        mytext:""
      }
    )
  }

  const remove = (index)=>{
    const updatedArray = activity.myArray.filter((ele, id)=> id !== index);

    setactivity(
      {
        ...activity,
        myArray:updatedArray
      }
    )

  }

  function edit(index){
    setactivity({
      ...activity,
      isEnable:true,
      indexofEdit:index
    })
  }
  
  function update( index){
    const updatedArray = [...activity.myArray];
    updatedArray[index].mytext = activity.newVal

    setactivity({
      ...activity,
      myArray:updatedArray,
      isEnable:false,
      indexofEdit:index,
      
    })

  }

  
  

  console.log(activity)
  return (
    <div className='container'>
        <div className="inp_frame">
          <input value={activity.mytext} onChange={(e) => setactivity({...activity, mytext:e.target.value})} type="text" />
          <button className='cta_add' onClick={add}>ADD</button>
        </div>

        <div className="out_frame">
          {
            activity.myArray.map((item, index)=>{
              return(
                <div className="details" key={index}>
                  {
                    activity.isEnable && activity.indexofEdit === index?(
                      <div className="layout">
                        <input type="text" value={activity.newVal} onChange={(e)=> setactivity({...activity, newVal:e.target.value})} />
                        <button className='cta_add' onClick={()=> update(index)}>Update</button>
                      </div>
                    ):(
                      <div className="layout">
                          <h1>{item.mytext}</h1>
                          <div className="btn">
                            <button className='cta_add' onClick={()=> edit(index)}>Edit</button>
                            <button className='cta_add' onClick={()=> remove(index)}>Remove</button>
                          </div>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default App
