/*<Button //Add this to all the information Pages
buttonStyle={styles.Button}
containerStyle={styles.ButtonContainer}
titleStyle={styles.Button}
title="Search For Vaccines"
onPress={() => navigate('Results')}> 
</Button> */


            const renderVaccine = (item.vaccinetypes);
           
           switch (renderVaccine) {
           case item.vaccineTypes.includes("Moderna") && item.availability === "Yes" :
               <View>
                   <Text style={styles.Text}>Moderna Covid Vaccine </Text>

                   <Icon 
                       name={'check-circle'}
                       type= 'material-icons' 
                       color='#70BAFF'
                   /> 
               </View>
           break;
           case item.vaccineTypes.includes("Pfizer") && item.availability === "Yes" :
           
                   <View>
                       <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                       <Icon 
                           name={'check-circle'}
                           type= 'material-icons' 
                           color='#70BAFF'
                       /> 
                   </View>
               
           break;
           case item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" :
               <View>
                   <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                   <Icon 
                       name={'check-circle'}
                       type= 'material-icons' 
                       color='#70BAFF'
                   /> 
               </View>
           break;
           case item.vaccineTypes.includes("Unknown") && item.availability === "Yes" :
               <View>
                   <Text style={styles.Text}>Vaccine Types Unknown</Text>
                   <Icon 
                       name={'check-circle'}
                       type= 'material-icons' 
                       color='#70BAFF'
                   /> 
               </View>
           break;
           case item.availability === "NO" : 
               <View>
                   <Text style={styles.Text}>Vaccine Types Unknown</Text>
                   <Icon 
                       name={'check-circle'}
                       type= 'material-icons' 
                       color='#70BAFF'
                   /> 
               </View>  
       }  
   
                  

       function RenderVaccineType ({providerdata}) { 

        //const renderVaccine = ({item});
               
                
        if (providerdata.vaccinetypes.includes("Moderna") && providerdata.availability === "Yes") {
            <View>
                <Text style={styles.Text}>Moderna Covid Vaccine </Text>
    
                <Icon 
                    name={'check-circle'}
                    type= 'material-icons' 
                    color='#70BAFF'
                /> 
            </View>
        } else if ( providerdata.vaccinetypes.includes("Pfizer") && providerdata.availability === "Yes") {
        
                <View>
                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                    <Icon 
                        name={'check-circle'}
                        type= 'material-icons' 
                        color='#70BAFF'
                    /> 
                </View>
        } else if ( providerdata.vaccinetypes.includes("J&J/Janssen") && providerdata.availability === "Yes" ) {
            <View>
                <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                <Icon 
                    name={'check-circle'}
                    type= 'material-icons' 
                    color='#70BAFF'
                /> 
            </View>
        } else if (providerdata.vaccinetypes.includes("Unknown") && providerdata.availability === "Yes") {
            <View>
                <Text style={styles.Text}>Vaccine Types Unknown</Text>
                <Icon 
                    name={'check-circle'}
                    type= 'material-icons' 
                    color='#70BAFF'
                /> 
            </View>
        } else if (providerdata.availability === "NO")  { 
            <View>
                <Text style={styles.Text}>Vaccine Types Unknown</Text>
                <Icon 
                    name={'check-circle'}
                    type= 'material-icons' 
                    color='#70BAFF'
                /> 
            </View> 
        } else {
            <View/>
        }
    
        return (
            <View>
                <FlatList
                    data={providerdata}
                    renderItem={RenderVaccineType}
                    keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
                />
            </View>
    
        );
    }  
       
//Previous Broke iteration//
/*
    const renderVaccine = ({item}) => {
        if (item.vaccineTypes.includes("Moderna") && item.availability === "Yes" ) {
            return (
                <View>
                    <Text style={styles.Text}>Moderna Covid Vaccine </Text>

                    <Icon 
                        name='check-circle'
                        type= 'material-icons' 
                        color='#70BAFF'
                    /> 
                    
                </View>
            )
        } else if ( item.vaccineTypes.includes("Pfizer") && item.availability === "Yes") {
            return (
                <View>
                    <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                    <Icon 
                        name={'check-circle'}
                        type= 'material-icons' 
                        color='#70BAFF'
                    /> 
                </View>
            )
        } else if ( item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" ) {
            return(
                <View>
                    <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                    <Icon 
                        name={'check-circle'}
                        type= 'material-icons' 
                        color='#70BAFF'
                    /> 
                </View>
            )
        } else if (item.vaccineTypes.includes("Unknown") && item.availability === "Yes") {
            return (
                <View style={{paddingLeft:10}}>
                    <Text style={styles.Text}>Unknown</Text>
                    <Text>Vaccines are available but the Provider has not stated the type</Text>
                    <Text>In Stock:
                        <Icon 
                            name={'check-circle'}
                            type= 'material-icons' 
                            color='#70BAFF'
                        /> 
                    </Text>
                </View>
            )
        } else if (item.availability === "No")  { 
            return (
            <View style={{paddingLeft:10}}>
                <Text style={styles.Text}> Vaccines Are Currently UnAvailable</Text>
                <Text> In Stock:
                    <Icon 
                        name= 'highlight-off'
                        type= 'material-icons' 
                        color='#FF0000'
                    /> 
                    </Text>
            </View> 
            )
        } else { //May not need this code//
            return (
            <View/>
            ) //May not need this code//
        } */

        {/* Another Way to Provide the vaccineType--But does not state 'Unknown', if type is Unknown.
                        <View>
                            <Text style={styles.Text}>Moderna Covid Vaccine </Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("Moderna") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" // Allows Checkss to show even if vaccinetype is unknown. fixed bug that showed 'x' when type was unknown but vaccines avaiible ? 'check-circle' : 'highlight-off' }//before includes(),using ==/=== did not work due to data array not seperating vaccinesType name//
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("Moderna") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                            </Text> 
                            <Text style={styles.Text}>Pfizer/BioNTech Covid Vaccine </Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("Pfizer") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("Pfizer") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                                
                            </Text> 
                            <Text style={styles.Text}>Johnson & Johnson’s Janssen Covid Vaccine</Text>
                            <Text> 
                                In Stock:
                                <Icon 
                                    name={item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? 'check-circle' : 'highlight-off' }
                                    type= 'material-icons' 
                                    color={item.vaccineTypes.includes("J&J/Janssen") && item.availability === "Yes" || item.vaccineTypes === "Unknown" && item.availability === "Yes" ? Icon.color='#70BAFF': Icon.color='#FF0000'}
                                /> 
                            </Text> 
                        </View>*/}