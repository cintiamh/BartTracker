import { GraphQLSchema } from "graphql";

const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLString
} = graphql;

const stations = [
    {
        "name": "12th St. Oakland City Center",
        "abbr": "12TH",
        "gtfs_latitude": "37.803768",
        "gtfs_longitude": "-122.271450",
        "address": "1245 Broadway",
        "city": "Oakland",
        "county": "alameda",
        "state": "CA",
        "zipcode": "94612"
    }, {
        "name": "16th St. Mission",
        "abbr": "16TH",
        "gtfs_latitude": "37.765062",
        "gtfs_longitude": "-122.419694",
        "address": "2000 Mission Street",
        "city": "San Francisco",
        "county": "sanfrancisco",
        "state": "CA",
        "zipcode": "94110"
    }
];

// Stations: https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y
const StationType = new GraphQLObjectType({
    name: 'StationType',
    fields: {
        "name": GraphQLString,
        "abbr": GraphQLString,
        "gtfs_latitude": GraphQLFloat,
        "gtfs_longitude": GraphQLFloat,
        "address": GraphQLString,
        "city": GraphQLString,
        "county": GraphQLString,
        "state": GraphQLString,
        "zipcode": GraphQLInt
    }
})

// Example path: https://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V&json=y
// const RealTimeEstimatesType = new GraphQLObjectType({
//     name: 'RealTimeEstimates',
//     fields: {
//         // "minutes": "35", "platform": "2", "direction": "South", "length": "6", "color": "ORANGE", "hexcolor": "#ff9933", "bikeflag": "1", "delay": "0"
//     }
// });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        station: {
            type: StationType,
            args: {
                abbr: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return stations;
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery
});
