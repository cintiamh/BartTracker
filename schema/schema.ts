/**
 * This is the schema file, since this project is not bit enough to have separated files
 * for each object's schema. (@cintiamh)
 */
import { GraphQLSchema } from "graphql";
import { getRoutes, getRouteByNum, getStationByAbbr, getStationsByAbbrArr, getStations } from "../api/fetches";

const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} = graphql;

// Stations: https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y
const StationType = new GraphQLObjectType({
    name: 'StationType',
    fields: {
        name: { type: GraphQLString },
        abbr: { type: GraphQLString },
        gtfs_latitude: { type: GraphQLFloat },
        gtfs_longitude: { type: GraphQLFloat},
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        county: { type: GraphQLString },
        state: { type: GraphQLString },
        zipcode: { type: GraphQLInt }
    }
});

const RouteFields = {
    name: { type: GraphQLString },
    abbr: { type: GraphQLString },
    routeID: { type: GraphQLString },
    number: { type: GraphQLInt },
    origin: { type: GraphQLString },
    destination: { type: GraphQLString },
    direction: { type: GraphQLString },
    hexcolor: { type: GraphQLString },
    color: { type: GraphQLString },
    num_stns: { type: GraphQLInt },
};

const RouteType = new GraphQLObjectType({
    name: 'RouteType',
    fields: RouteFields
});

const RouteStationsType = new GraphQLObjectType({
    name: 'RouteStationslType',
    fields: {
        ...RouteFields,
        stations: {
            type: new GraphQLList(StationType),
            resolve(parentValue) {
                return getStationsByAbbrArr(parentValue.config.station);
            }
        }
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
        routes: {
            type: new GraphQLList(RouteType),
            resolve() {
                return getRoutes();
            }
        },
        route: {
            type: RouteStationsType,
            args: {
                num: {
                    type: GraphQLInt
                }
            },
            resolve(parentValue, args) {
                return getRouteByNum(args.num);
            }
        },
        stations: {
            type: new GraphQLList(StationType),
            resolve() {
                return getStations();
            }
        },
        station: {
            type: StationType,
            args: {
                abbr: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return getStationByAbbr(args.abbr);
            }
        },
    }
});

export default new GraphQLSchema({
    query: RootQuery
});
