class Course < ActiveRecord::Base
  validates :title, :file, presence: true,
                    length: {minimum: 5}
  has_and_belongs_to_many :users
end
