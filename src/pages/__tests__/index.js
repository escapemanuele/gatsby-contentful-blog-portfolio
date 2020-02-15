import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../index'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => 
        render({
            site: {
                siteMetadata: {
                    title: `Gatsby contentful starter`,
                    description: `Starter description`
                }
            }
        })
    )
})

describe('Index', () => {
    it('renders correctly', () => {
        const data = {
            site: {
                siteMetadata: {
                    title: `Gatsby contentful starter`,
                    description: `Starter description`
                },
            },
            homeImage: {
                childImageSharp: {
                    fluid:{
                        base64: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBBAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFZeVNDQkh//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAAREiIx/9oACAEBAAEFAlUEU4F5DFOzX6yjz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAERABBBEv/aAAgBAQAGPwITs5lBwLSq/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFRQdH/2gAIAQEAAT8hs4zUQs3ld7NfsQisubWlizshj//aAAwDAQACAAMAAAAQAA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAACAgICAwAAAAAAAAAAAAABEQAhMVFBYXHh8P/aAAgBAQABPxAP99gNn7iH7DgDBWdNa9TO8vyhuxLXHpQtjQ0X3BCgF3P/2Q==",
                        aspectRatio: 1.7489421720733427,
                        src: "/static/939d6e8fd03b3a5f95030c5e1e74de9e/0c160/index-hero.jpg",
                        srcSet: "/static/939d6e8fd03b3a5f95030c5e1e74de9e/ac6ef/index-hero.jpg 1040w,\n/static/939d6e8fd03b3a5f95030c5e1e74de9e/5d93e/index-hero.jpg 2080w,\n/static/939d6e8fd03b3a5f95030c5e1e74de9e/0c160/index-hero.jpg 2480w",
                        sizes: "(max-width: 2480px) 100vw, 2480px"
                    }
                }
            }
        }
        const tree = renderer.create(<Index data={data} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})