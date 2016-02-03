class User < ActiveRecord::Base
  has_and_belongs_to_many :courses

  def manager?
    self.role == 'manager'
  end

  def admin?
    self.role == 'admin'
  end
end
