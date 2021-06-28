const SKILLS_MAP = [
    {
        name: 'Нетренированный',
        level: 0,
        color: 'red',
    },
    {
        name: 'Новичок',
        level: 1,
        color: 'green',
    },
    {
        name: 'Ученик',
        level: 2,
        color: 'blue',
    },
    {
        name: 'Адепт',
        level: 3,
        color: 'yellow',
    },
    {
        name: 'Эксперт',
        level: 4,
        color: 'purple',
    },
    {
        name: 'Мастер',
        level: 5,
        color: 'gold',
    },
];

type TBasicParameters = {
    power: number,
    dexterity: number,
    charisma: number,
    iq: number,
}

type TSkill = {
    name: string,
    level: number,
}

interface IPlayer {
    skills: Array<TSkill>,
}

class Player implements IPlayer {
    skills: Array<TSkill>;

    constructor(basicParameters: TBasicParameters) {
        this.skills = [
            {
                name: 'Атака',
                level: basicParameters.power,
            },
            {
                name: 'Стелс',
                level: basicParameters.dexterity - 1,
            },
            {
                name: 'Стрельба из лука',
                level: basicParameters.dexterity - 2,
            },
            {
                name: 'Обучаемость',
                level: basicParameters.iq,
            },
            {
                name: 'Выживание',
                level: basicParameters.iq - 1,
            },
            {
                name: 'Медицина',
                level: Math.round(basicParameters.iq / 2),
            },
            {
                name: 'Запугивание',
                level: basicParameters.charisma - 1,
            },
            {
                name: 'Проницательность',
                level: basicParameters.charisma,
            },
            {
                name: 'Внешний вид',
                level: basicParameters.charisma - 2,
            },
            {
                name: 'Манипулирование',
                level: basicParameters.charisma - 3,
            }
        ]
    }

    public getSkill(skillName: string): TSkill | null {
        if (this.skills.hasOwnProperty(skillName)) {
            return this.skills.find((skill: TSkill): TSkill | boolean => {
                return skill.name === skillName;
            }) || null;
        }

        return null;
    }
}

export {SKILLS_MAP, Player};