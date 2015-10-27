class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.text :text
      t.references :client, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
