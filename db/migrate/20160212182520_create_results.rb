class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.belongs_to :enrollment, index: true
      t.integer :score
      t.string :status
      t.string :bookmark
      t.timestamps null: false
    end
  end
end
