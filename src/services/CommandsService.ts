import { Injectable } from '@nestjs/common'
import { ConsoleService } from 'nestjs-console'
import { Connection } from 'typeorm'
import { InjectPinoLogger, PinoLogger } from "nestjs-pino"

import { SeederService } from "src/services/SeederService"

@Injectable()
export class CommandsService {
  constructor(
    private readonly consoleService: ConsoleService,
    private seederService: SeederService,
    private connection: Connection,
    @InjectPinoLogger(CommandsService.name)
    protected readonly logger: PinoLogger,
  ) {
    // get the root cli
    const cli = this.consoleService.getCli()

    // command
    this.consoleService.createCommand(
      {
        command: 'seed',
        description: 'Seed data'
      },
      this.seed,
      cli // attach the command to the cli
    )

    // group command
    const groupCommand = this.consoleService.createGroupCommand(
      {
        name: 'db',
        description: 'Database commands'
      },
      cli // attach the command to the root cli
    )

    // sub command
    this.consoleService.createCommand(
      {
        command: 'migrate',
        description: 'Migrate'
      },
      this.dbMigrate,
      groupCommand // attach the command to the group
    )
  }

  seed = async (): Promise<void> => {
    this.logger.info(`Start seeding database`)
    await this.seederService.seed()
    this.logger.info(`Database seeded`)
  }

  dbMigrate = async (): Promise<void> => {
    this.logger.info("Start database migration")
    await this.connection.runMigrations({
      transaction: 'all'
    })
    this.logger.info("Database migrated")
  }



}