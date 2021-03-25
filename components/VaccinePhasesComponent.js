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
       