require 'pry'
require 'httparty'

module Sinatra
  class Server < Sinatra::Base
    get "/" do
      url = 'https://data.ny.gov/resource/liquorauthorityactivelicenses.json?county_name_licensee=NEW YORK'
      @bars = HTTParty.get(url)
      # binding pry
      erb :index
    end
  end
end
