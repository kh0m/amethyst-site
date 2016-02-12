class Result < ActiveRecord::Base
  belongs_to :enrollment

  attr_accessor :status, :score, :bookmark
end
