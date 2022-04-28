import React from "react";
import './App.css';


class BrowseFlower extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch( "/florist/getall")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                   Shop_Name: { item.shopName }, 
                    Flowers: { item.flowers}, 
                    Timings: { item.timings } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default BrowseFlower;