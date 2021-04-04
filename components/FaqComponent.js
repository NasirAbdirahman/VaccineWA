import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { Button, Divider, ListItem } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { FAQDATA } from '../shared/FaqData';


{/*function RenderQuestion ({providerdata}) {

    const renderItem = ({ item }) => {
        return (
        <ListItem bottomDivider>
            {/*<Avatar source={{uri: item.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                <View >
                    
                    <Text>5 months ago</Text>
                </View>
                </ListItem.Content>
            <ListItem.Chevron 
            />
        </ListItem>
        )
    };

    return (
        <View>
            <FlatList
                data={providerdata}
                renderItem={renderItem}
                //keyExtractor = (item, index) => index.toString()
                keyExtractor={item => item.id.toString()} //Because all the Providers have a unique ID, we can set this to use the ID//
            />
        </View>
    )

};*/}


renderHeader = (section, _, isActive) => {
    return (
        <View style={[styles.header, isActive ? styles.active : styles.inactive]}> 
            <Text style={styles.headerText}>{section.title}</Text>
        </View>
    );
};

renderContent = (section, _, isActive) => {
    return (
        <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
            <Text >
                {section.content}
            </Text>
        </View>
    );
}

class FaqAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqdata: FAQDATA,
            activeSections: [],
            collapsed: false,
        };
       
    }


    static navigationOptions = {
        title: 'FAQ',
    };


    /*toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };*/
    
    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };



    render () {

        //const { navigate } = this.props.navigation;

        const faqdata = this.state.faqdata;
        const { activeSections } = this.state;



        return (
           
            <ScrollView style={{paddingTop:15,paddingBottom:20, backgroundColor: '#ffffff'}}>

                <View style={{paddingLeft:7, paddingBottom:50}}>      
                    <Text style={styles.HeaderTitle}>Frequently Asked Questions</Text>  

                    <Divider style={{ backgroundColor: '#B1DDF9', width:'85%', alignSelf:'center', margin:10, padding:1}}/>
                   
                </View>

                <View style={styles.container}>
                    <View contentContainerStyle={{ paddingTop: 30 }}>
                    
                    <Accordion
                        activeSections={activeSections}
                        sections={faqdata}//Import data here
                        renderHeader={renderHeader}
                       
                        renderContent={renderContent}
                        duration={400}
                        onChange={this.setSections}
                        //Was scrollView
                    />
                    </View>
                </View>
                

                {/* Tier A Section 
                <View style={{paddingLeft:7, paddingBottom:20}}>      
                    <Text style={styles.Title}>Tier A</Text>  
                    <Divider style={{ backgroundColor: '#B1DDF9', width:'15%', margin:1, padding:1}}/>            
                </View>

                <View style={{paddingLeft:7,paddingBottom:30,flexDirection:'row'}}>

                    <View>
                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="A1"
                            > 
                        </Button>

                        <Button 
                            buttonStyle={styles.Circle}
                            containerStyle={styles.CircleContainer}
                            titleStyle={styles.Circle}
                            title="A2"
                            > 
                        </Button>
                    </View>
                    
                    <View style={styles.Container}> 
                        <Text style={styles.ContainerTitle}>December 2020 - Present 2021</Text> 
                        <Text style={styles.ContainerText}>-High-risk healthcare workers in health care settings</Text>
                        <Text style={styles.ContainerText}>-High-risk first responders</Text> 
                        <Text style={styles.ContainerText}>-Long-term care facility residents</Text> 
                        <Text style={styles.ContainerText}>-All other workers at risk in health care settings</Text>         
                    </View> 
                   
                </View>*/}

            </ScrollView>
        )
    }
}



//StyleSheet//

const styles = StyleSheet.create({
    HeaderTitle: {
        color: '#000',
        textAlign:'center',
        fontSize: 32,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
    },
    HeaderTitle2: {
        color: '#70BAFF',
        textAlign:'center',
        fontSize: 35,
        letterSpacing: 1,
        
    },
    SubHeader: {
        color: '#000',
        textAlign:'center',
        fontSize: 23,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingTop:5
    },
    Title: { //Provider Font Styling//
        color: '#000',
        fontSize: 22,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingBottom:3
        
    },
    Text: {
        fontSize: 15,
        fontFamily:'SourceSansPro_600SemiBold',
        letterSpacing: 1,
        paddingTop:10,
        color:'#7F7F7F'
      
        
    },
    Text2: {
        fontSize: 15,
        fontFamily:'SourceSansPro_700Bold',
        letterSpacing: 1,
        paddingTop:7,
        color:'#000'//#70BAFF-Alt. Color//
        
        
    },
    Button: {
        backgroundColor:'#70BAFF',
        borderRadius:25,
        padding:4,
        paddingTop:6,
        paddingBottom:6,
        alignSelf: "center",
        fontSize: 25,
        //bottom:1.5 = reveals light blue bg//
  
    },
    ButtonContainer: {
        elevation:15,
        alignSelf: "center",
        backgroundColor:'#B1DDF9',
        shadowColor:'#70BAFF',
        padding:1.5,
        borderRadius:25,
    },
    Container:{
        backgroundColor: '#B1DDF9',
        opacity:0.70,
        padding:15,
        borderRadius:20,
        left:13 
    },
    ContainerTitle:{
        fontSize: 18,
        fontFamily:'SourceSansPro_700Bold',
        alignSelf:'center',
        paddingBottom:10
    },
    ContainerText:{
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',  
        alignSelf:'center',
        width:248,
        letterSpacing: 1,
        paddingTop:3
    },
    Link:{
        textAlign:'center',
        fontSize: 16,
        fontFamily:'SourceSansPro_700Bold',
        color: '#70BAFF',
        paddingTop:10
        
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        //paddingTop: Constants.statusBarHeight,
      },
      title: {
        textAlign:'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      headerText: {
        //textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
      },
      content: {
        padding: 20,
        backgroundColor: '#fff',
      },
      active: {
        backgroundColor: 'rgba(255,255,255,1)',
      },
      inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
      },
      selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      activeSelector: {
        fontWeight: 'bold',
      },
      selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
      },
      multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
      },
      multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
      },
    
    
});


export default FaqAccordion;  