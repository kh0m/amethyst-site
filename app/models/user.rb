class User < ActiveRecord::Base
  has_many :enrollments
  has_many :courses, through: :enrollments
  after_initialize :set_default_role, :if => :new_record?

  enum role: [:user, :manager, :admin]

  def set_default_role
    self.role ||= :user
  end
end
