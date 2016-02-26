class MoveBookmarkFromResultsToEnrollment < ActiveRecord::Migration
  def change
    change_table :results do |t|
      t.remove :bookmark
    end
    change_table :enrollments do |t|
      t.string :bookmark
    end
  end
end
