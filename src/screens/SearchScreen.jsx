import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.jsx';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const [results,setResults] = useState([]);

    const searchAPI = async () =>{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
                onSearchTermSubmit={()=>{
                    searchAPI(searchTerm);
                }}
            />
            <Text >Search Screen</Text>
            <Text>We have found {results.length}</Text>
            <Text>{console.log(results)}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
