import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AuthTokensSchema extends BaseSchema {
  protected tableName = 'auth_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
