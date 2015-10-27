class Course < ActiveRecord::Base
  belongs_to :client
  validates :title, presence: true,
                    length: {minimum: 5}
end
