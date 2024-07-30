/**
 * @license MIT
 * @copyright Copyright (c) 2024, GoldFrite
 */

/**
 * **Attention!** This class only works with the EML AdminTool. Please do not use it without the AdminTool.
 */
export default class Maintenance {
  private url: string

  /**
   * @param url The URL of your EML AdminTool website
   */
  constructor(url: string) {
    if (!url) throw new Error('No URL given for Maintenance')
    this.url = `${url}/api`
  }

  async getMaintenance() {
    let res = await fetch(`${this.url}/maintenance`, { method: 'GET' })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(`Error while fetching Maintenance from the EML AdminTool: ${err}`)
      })

    return res
  }
}