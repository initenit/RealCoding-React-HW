function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;
  const headerStyle = {
    background: "skyblue"
  };

  const liStyle = {
    border: "1px solid black",
    borderBottom: 0,
    paddingBottom: "5px"
  }

  return (
    <div>
      
      <h1 style={headerStyle}>CityList</h1>
      
      
      <h3>Click to Search Google</h3>

      <ul>
        {cities.map((item, index) => {
          //return <li key={index}>{item}</li>;
          const searchLink = "https://www.google.com/search?q=" + item;
          return <li key={index} style={liStyle}><a href={searchLink} target="_blank">{item}</a></li>
        })}
      </ul>
    </div>
  );
}

export default CityList;
