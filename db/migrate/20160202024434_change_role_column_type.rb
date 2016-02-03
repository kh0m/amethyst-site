class ChangeRoleColumnType < ActiveRecord::Migration
  # down is for reverting
  def self.down
    change_column :users, :role, :text, default: '0'
  end

  # up is for changing
  def self.up
    change_column :users, :role, :string, default: 'user'
  end
end
