class ChangeCourseTextToFile < ActiveRecord::Migration
  def change
    rename_column :courses, :text, :file
  end
end
