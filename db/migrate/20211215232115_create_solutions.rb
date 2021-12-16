class CreateSolutions < ActiveRecord::Migration[6.1]
  def change
    create_table :solutions do |t|
      t.integer :user_id
      t.integer :challenge_id
      t.string :photo_url
      t.string :explaination
      t.string :hints
      t.string :questions

      t.timestamps
    end
  end
end
