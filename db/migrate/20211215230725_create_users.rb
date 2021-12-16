class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, unique: true
      t.string :password_digest
      t.string :email, unique: true
      t.string :first_name
      t.string :avatar_url
      t.text :bio
      

      t.timestamps
    end
  end
end
