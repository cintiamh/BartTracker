const graphql = require('graphql');

const {
    GraphQLObjectType
} = graphql;

// Example path: https://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V&json=y
const RealTimeEstimatesType = new GraphQLObjectType({
    name: 'RealTimeEstimates',
    fields: {
        // "minutes": "35", "platform": "2", "direction": "South", "length": "6", "color": "ORANGE", "hexcolor": "#ff9933", "bikeflag": "1", "delay": "0"
    }
});
