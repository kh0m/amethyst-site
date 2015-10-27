class AddClientToCourses < ActiveRecord::Migration
  def change
    add_reference :courses, :client, index: true, foreign_key: true
  end
end
