class ConnectCoursesUsersWithResults < ActiveRecord::Migration
  def change
    add_column :courses_users, :created_at, :datetime
    add_column :courses_users, :updated_at, :datetime
    add_reference :courses_users, :result, index: true, foreign_key: true
  end
end
