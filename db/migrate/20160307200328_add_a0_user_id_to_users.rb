class AddA0UserIdToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :A0user_id
    end
  end
end
