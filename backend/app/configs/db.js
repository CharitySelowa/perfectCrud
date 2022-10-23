const {Client}=require("pg")

const DB_URL='postgres://hcswidgfrxvmrd:63e00ab2e9bcf290b79a2c5dcc0f12f06a675a3a0c2eb14cc887a7dc4b1969ed@ec2-3-214-2-141.compute-1.amazonaws.com:5432/dah9ev3r89he3k'

const client = new Client({connectionString:DB_URL,ssl:{rejectUnauthorized:false}})//DYNAMIC

module.exports= client
