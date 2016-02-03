class ChangeClientIdColumnToUserId < ActiveRecord::Migration
  def change
    rename_column :courses, :client_id, :user_id
  end
end
