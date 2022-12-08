import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuSideBar extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        const style = {
            position: 'fixed',
            top: '0px',
            bottom: '0px',
            left: '0px',
            paddingBottom: '1em',
            background: 'rgb(27, 28, 29)',
            overflowY: 'auto',
            overflowX: 'hidden',
        };

        return (
            <Menu vertical inverted pointing style={style}>
                <Menu.Item>
                    <Menu.Header>Products</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='enterprise'
                            active={activeItem === 'enterprise'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='consumer'
                            active={activeItem === 'consumer'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='rails'
                            active={activeItem === 'rails'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='python'
                            active={activeItem === 'python'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='php'
                            active={activeItem === 'php'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='shared'
                            active={activeItem === 'shared'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='dedicated'
                            active={activeItem === 'dedicated'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='email'
                            active={activeItem === 'email'}
                            onClick={this.handleItemClick}
                        >
                            E-mail Support
                        </Menu.Item>

                        <Menu.Item
                            name='faq'
                            active={activeItem === 'faq'}
                            onClick={this.handleItemClick}
                        >
                            FAQs
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}
