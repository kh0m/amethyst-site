class Enrollment < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  has_many :results

  attr_accessor :bookmark
end
