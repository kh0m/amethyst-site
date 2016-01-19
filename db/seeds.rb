# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


  require 'open-uri'
  require 'json'

  response = open('http://par8891/myapi/api/clients').read

  json = JSON.parse(response, opts = {
    symbolize_names: true
    })

  json.each do |item|
    Client.create(name: "#{item[:name]}")
  end
