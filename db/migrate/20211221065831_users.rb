class Users < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :logged_in, :boolean, :default => true
  end
end
