import { Injectable } from '@nestjs/common'
import { ConsoleService } from 'nestjs-console'

import { SeederService } from "src/services/SeederService";

@Injectable()
export class CommandsService {
  constructor(
    private readonly consoleService: ConsoleService,
    private seederService: SeederService,
  ) {
    // get the root cli
    const cli = this.consoleService.getCli()

    // command
    this.consoleService.createCommand(
      {
        command: 'seed',
        description: 'Seed database'
      },
      this.seed,
      cli // attach the command to the cli
    );

    // group command
    const groupCommand = this.consoleService.createGroupCommand(
      {
        name: 'scrap',
        description: 'Scrap sites'
      },
      cli // attach the command to the root cli
    );

    // sub command
    this.consoleService.createCommand(
      {
        command: 'all',
        description: 'Scrap all'
      },
      this.scrapAll,
      groupCommand // attach the command to the group
    );

    // sub command
    this.consoleService.createCommand(
      {
        command: 'site <name>',
        description: 'Scrap a site'
      },
      this.scrapSite,
      groupCommand // attach the command to the group
    );
  }

  seed = async (): Promise<void> => {
    console.log(`Start seeding database`)
    await this.seederService.seed()
    // const verbs = await this.verbsService.findAll();
    // console.log(verbs);
  };

  scrapAll = async (): Promise<void> => {
    console.log(`Scrap all sites`)
    // this.scrapService.all();
  };

  scrapSite = async (site: string): Promise<void> => {
    console.log(`Scrap ${site}`)
    // this.scrapService.site(site)
  };
}