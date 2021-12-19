class AddVotesToChallenges < ActiveRecord::Migration[6.1]
  def change
    add_column :challenges, :votes, :integer
  end
end
