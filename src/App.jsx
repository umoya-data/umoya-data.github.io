import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ResponsiveContainer, BarChart, LineChart, Line, Bar, Tooltip, CartesianGrid, XAxis, YAxis, Text, Label, Legend} from 'recharts'
import DataTable from 'datatables.net-react'
import DT from 'datatables.net-dt'
import { use } from 'react'

DataTable.use(DT)


var landingSubHeading = "Find the cheapest data"
var landingParagraph = "uMoya compares mobile data deals from all the major South African networks and puts them in one place. Instantly find the best-value deals with prices per MB, average prices and more. Save money and stay connected."
var appName = "umoya"
const API_URL = "https://umoyaapi.pythonanywhere.com"


//"#747bff"
var color1="#747bff"


function NavBar(props){
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a onClick={props.logoFunction} className="logo flex items-center space-x-3 rtl:space-x-reverse">

              <span className="self-center text-2xl font-extrabold whitespace-nowrap">{props.logoText}</span>
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  )
}

function SearchButton(props){
  return (
    <>
      <button onClick={props.searchButtonFunction} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </>
  )
}

function SearchDataList(props){

  const [carrier, setCarrier] = useState(null)

  const carriers = props.carriers

  const carriersDataList = carriers.map((item, i) => (
    <option key={i} value={item}>{item}</option>
  ))
  
  function sendCarrierToApp(){
    props.searchButtonFunction(carrier)
  }

  function sendCarrierToAppViaKeyPress(e){
    if(e.key === "Enter"){
   
      props.searchButtonFunction(carrier)
    }
  }

  return (
    <>
       
        {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label> */}
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" onChange={e => setCarrier(e.target.value)} onKeyDown={sendCarrierToAppViaKeyPress} list="carriers" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for a specific network (e.g. MTN)" required />
            <SearchButton searchButtonFunction={sendCarrierToApp}/>
        
        </div>
         <datalist id="carriers">
              {carriersDataList}
          </datalist>
       
    </>
  )
}







function SearchBar(props){
  return (
    <>
    <div>
      <SearchDataList searchButtonFunction = {props.searchButtonFunction} carriers={props.carriers}/>
    </div>
    </>
  )
}

function Heading(props){
  return (
    <>
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{props.text}</h2>
    </>
  )
}


function SubHeading(props){
  return (
    <>
      <h2 className="subheading mb-4 text-2xl  leading-none tracking-tight text-gray-500 md:text-3xl lg:text-4xl">{props.text}</h2>
    </>
  )
}



function Paragraph(props){
  return (
    <>
      <p>{props.text}</p>
    </>
  )
}

function Description(props){
  return (
    <>
      <div>
        <Heading text={props.subHeadingText}/> 
        <Paragraph text={props.paragraphText}/>
      </div>
    </>

  )
}

function ChartContainer(){
  return(
    <>
      <div>

      </div>
    </>
  )
}


//  const data = [
//     {name: "MTN", value: 15},
//     {name: "Vodacom", value: 7},
//     {name: "Telkom", value: 5},
//     {name: "Rain", value: 10},
//     {name: "Cell C", value: 12}
//   ]


//chart types
// bar chart of cheapest bundle in each network
// bar chart of median price per MB
// 

function ChartTitle({chartWidth, titleText}){
  console.log("ChartTitle")
  return (
    <>
      <text x={chartWidth / 2} y={10.5} fill="#444" textAnchor="middle" dominantBaseline="central">
        <tspan>{titleText}</tspan>
      </text>
    </>

  )
}


function HorizontalBarChartContainer(){

  const [chartData, setChartData] = useState([])
  const [chartWidth, setChartWidth] = useState(null)

  useEffect(() =>{
    fetch(API_URL + "/prepaid-median-price-per-mb?carrier=all")
    .then((response) =>{
      return response.json()
    }).then((data) =>{
      // console.table(data)
      setChartData(data["Carriers"])
    })
  }, [])

  function updateTitle(containerWidth){
    setChartWidth(containerWidth)
  }

  return (
    <>
      <div className="bar-chart-container relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <ResponsiveContainer onResize={e => updateTitle(e)}>
          {/* <SubHeading text="Chart Heading"/> */}
          
          <BarChart layout = "horizontal" data={chartData} margin={{left:30, right:0, top:25, bottom:0}} padding={{right:0, left:0, top:0, bottom:0}}>
            {/* <ChartTitle chartWidth={500} titleText="Price per MB of South African mobile providers." /> */}
            <text x={(chartWidth / 2)+15} width={chartWidth/6} y={10.5} fill="#444" textAnchor="middle" dominantBaseline="central">
              <tspan>Average Price per MB</tspan>
            </text>
            <Bar stroke={color1} fill={color1} dataKey="Median Price per MB" radius = {[8, 8, 0, 0]}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <XAxis dataKey="Carrier"/>
            <YAxis label={{ value: 'Price / MB (ZAR/MB)', angle: -90, position: 'insideBottomLeft', offset: 20, viewBox: {height: 244, width: 60, x: 15, y: -10}}}/>
            <Tooltip cursor={{fill:color1 + "33"}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    
  )

}

function LowestPricesBarChartContainer(){

  const [chartData, setChartData] = useState([])
  const [chartWidth, setChartWidth] = useState(null)

  useEffect(() =>{
    fetch(API_URL + "/prepaid-lowest-prices?carrier=all")
    .then((response) =>{
      return response.json()
    }).then((data) =>{
      // console.table(data)
      setChartData(data["Carriers"])
    })
  }, [])

  
  function updateTitle(containerWidth){
    setChartWidth(containerWidth)
  }
  
  function updateTitle2(e){
    console.log(`e = ${e}`)
  }

  return (
    <>
      <div className="bar-chart-container relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <ResponsiveContainer onResize={e => updateTitle(e)}>
          {/* <SubHeading text="Chart Heading"/> */}
          
          <BarChart layout = "horizontal" data={chartData} margin={{left:0, right:0, top:25, bottom:0}} padding={{right:0, left:0, top:0, bottom:0}}>
            <text x={(chartWidth / 2)+15} width={chartWidth/6} y={10.5} fill="#444" textAnchor="middle" dominantBaseline="central">
              <tspan>Cheapest data bundle prices</tspan>
            </text>
            <Bar stroke={color1} fill={color1} dataKey="Price (ZAR)" radius = {[8, 8, 0, 0]}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" onChange={e => updateTitle2(e)}/>
            <XAxis dataKey="Carrier"/>
            <YAxis label={{ value: 'Price (ZAR)', angle: -90, position: 'insideLeft', offset: 20, viewBox: {height: 244, width: 60, x: 0, y: 55}}}/>
            <Tooltip cursor={{fill:color1 + '33'}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    
  )

}



function VerticalBarChartContainer(){

 

  return (
    <>
      <div className="bar-chart-container relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <ResponsiveContainer width="100%" height="100%">
          {/* <SubHeading text="Chart Heading"/> */}
          <BarChart layout = "vertical" data={data} width={500} height={500}>
            <Bar stroke={color1} fill={color1} dataKey="value" radius = {[0, 8, 8, 0]}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <XAxis />
            <YAxis dataKey="name" type="category" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    
  )

}



function CheapestBundleTable(){

  const [tableData, setTableData] = useState([])

  useEffect(() =>{
    fetch(API_URL + "/prepaid-cheapest-bundle?carrier=all")
    .then((response) =>{
      return response.json()
    }
    ).then((data) =>{
      setTableData(data["Carriers"])
      
    })
  }, [])

 
  const tableRows = tableData.map((item, i) => (

                  
                          <tr key = {i} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {item["Carrier"]}
                            </th>
                            <td className="px-6 py-4">
                              {item["Bundle Name"]}
                            </td>
                            <td className="px-6 py-4">
                              {item["Size (MB)"]}
                            </td>
                            <td className="px-6 py-4">
                              {item["Price (ZAR)"]}
                            </td>
                            <td className="px-6 py-4">
                              {item["Price per MB (ZAR/MB)"]}
                            </td>
                          </tr>))

  return (
    <>
      <SubHeading text="Cheapest bundles from each network"/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Network
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Bundle name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Amount (MB)
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price (ZAR)
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price per MB (ZAR/MB)
                      </th>
                     
                  </tr>
              </thead>
              <tbody>
                  {tableRows}
              </tbody>
          </table>
      </div>
    </>
  )
}

function StatsContainer(){
  return (
    <>
      <div className="stats-container">
        <LowestPricesBarChartContainer/>
        <HorizontalBarChartContainer/>
        
      </div>
    </>
    )
}

function LandingContainer(){
  return(
    <>
      
      <Description subHeadingText={landingSubHeading} paragraphText={landingParagraph}/>
      <CheapestBundleTable/>
      <StatsContainer/>
    </>
  )
}

function ErrorMessage({buttonClick}){
  return (
    <>
    

<div id="alert-2" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg className="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div className="ms-3 text-sm font-medium">
    Invalid carrier
  </div>
  <button type="button" onClick={buttonClick} className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
    <span className="sr-only">Close</span>
    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  </button>
</div>

    </>
  )
}


function CarrierBundleTable({carrierName}){
  const [tableData, setTableData] = useState([])

  useEffect(() =>{
    fetch(API_URL + `/prepaid?carrier=${carrierName}`) //TODO: create an API call or extra parameter to this call on the backend that returns this data as a 2-D list instead of a dict/object
    .then((response) =>{
      return response.json()
    }
    ).then((data) =>{
      setTableData(data["Data"]["Data"])
      
      
    })
  }, [carrierName])




  var dataTableData = tableData.map((item) => (
    
      [item["Name"], item["Size (MB)"], item["Price (ZAR)"], item["Price per MB (ZAR/MB)"]]
    
  ))

  // const tableRef = useRef()
  // console.table(tableRef.current.dt())

  return (
    <>
      <SubHeading text={"Bundles offered by " + carrierName}/>
      <div className="datatable-container relative overflow-x-auto shadow-md sm:rounded-lg">
        <DataTable  data={dataTableData} className="display w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th className="px-6 py-3">Bundle Name</th><th className="px-6 py-3">Size (MB)</th><th className="px-6 py-3">Price (ZAR)</th><th className="px-6 py-3">Price per MB (ZAR/MB)</th>
              </tr>
            </thead>
        </DataTable> 
      </div>
    </>
  )
  
}

function LineChartContainer({carrierName}){

  const [chartData, setChartData] = useState([])
  const [chartWidth, setChartWidth] = useState(null)

   function updateTitle(containerWidth){
    setChartWidth(containerWidth)
  }

  useEffect(() =>{
    fetch(API_URL + `/prepaid-price-per-mb-vs-size?carrier=${carrierName}&data-type=objects`)
    .then((response) =>{
      return response.json()
    }).then((data) =>{

      setChartData(data["Data"])
    })
  }, [carrierName])

 
  return (
      <>
      <div className="line-chart-container relative overflow-x-auto shadow-md sm:rounded-lg">
        <ResponsiveContainer onResize={e => updateTitle(e)}>
            <LineChart
            
              data={chartData}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 10,
              }}

              padding={{bottom:20}}
            >

               <text x={(chartWidth / 2)+15} width={chartWidth/6} y={10.5} fill="#444" textAnchor="middle" dominantBaseline="central">
                  <tspan>Price per MB vs Bundle Size</tspan>
               </text>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis label={{value:"Bundle Size (MB)", offset:-5, position:"insideBottom"}} dataKey="Size (MB)" tickCount={3}/>
          
             
              <YAxis label={{ value: 'Price / MB (ZAR/MB)', angle: -90, position: 'insideBottomLeft' }}/>

              
              <Tooltip />
              {/* <Legend /> */}
              {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
              <Line type="monotone" dataKey="Price per MB (ZAR/MB)" stroke="#747bff" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>
      
    )
  


}

function BackButton({backButtonFunction}){
  return (
      <>
      <button onClick={backButtonFunction} type="button" className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
          </path>
        </svg> */}
      Back to Home
    </button>
    </>

  )
    
}

function SearchResultContainer({carrierName, backButtonFunction}){
  return (
    <>
      <CarrierBundleTable carrierName={carrierName}/>
      <LineChartContainer carrierName={carrierName}/>
      <BackButton backButtonFunction={backButtonFunction}/>

    </>
  )
}




function App(){

  const [searchMade, setSearchMade] = useState(false)
  const [carrierName, setCarrierName] = useState(null)
  const [validCarrier, setValidCarrier] = useState(true)
  const [newSearchMade, setNewSearchMade] = useState(0)
  const carriers = ["MTN", "Vodacom", "Cell C", "Telkom", "Rain"] //TODO: Make this get the carriers from the backend via API call

  var body = null
  var errorMessage = null

  if (!validCarrier){
    errorMessage = <ErrorMessage buttonClick={dismissError}/>
  }

  if (!searchMade){
    body = <LandingContainer/>
  }else{
    body = <SearchResultContainer carrierName = {carrierName} backButtonFunction={returnToHome}/>
  }

  function dismissError(){
      setValidCarrier(true)
  }

  function returnToHome(){
    setValidCarrier(true)
    setSearchMade(false)
  }

  function renderSearchResults(carrier){
    
    if (carriers.includes(carrier)){
      setCarrierName(carrier)
      setSearchMade(true)
      setValidCarrier(true)
      setNewSearchMade(newSearchMade + 1)
    }else{
      setValidCarrier(false)
    }
  }

  return (
    <> 
      <NavBar logoText={appName} logoFunction={returnToHome}/>
      <SearchBar searchButtonFunction={renderSearchResults} carriers={carriers}/>
      {errorMessage}
      {body}
    </>
  )
}

export default App
