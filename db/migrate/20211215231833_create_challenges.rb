class CreateChallenges < ActiveRecord::Migration[6.1]
  def change
    create_table :challenges do |t|
      t.string :title
      t.string :question
      t.string :photo_url

      t.timestamps
    end
  end
end
