import React, {Component} from "react";
import styles from './Dashboard.module.css';
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/form";
import Input from "../../components/UI/input/input";
import Select from "../../components/UI/Select/select";
export default class Dashboard extends Component{
    state = {
        rol: 1,
        formControls: {
            option0: createControl({
                label: 'Login',
                errorMessage: 'Login invalid'
            },{required: true})
        }
    }
    submitHandler = event => {
        event.preventDefault()
    }
    createHandler = () => {

    }
    saveHandler = () => {

    }
    changeHandler = (value, controlName) => {

    }
    selectChangeHandler = event => {
        this.setState({
            rol: +event.target.value
        })
    }
    renderInputs () {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validate}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
            )
        })
    }
    render() {
        const select = <Select
            label="rol"
            value={this.state.rol}
            onChange={this.selectChangeHandler}
            options={[
                {text: 'admin', value: 1},
                {text: 'moderator', value: 2},
                {text: 'user', value: 3},
            ]}
        />
        return(
            <div className={styles['dashboard_container']}>
                <h1>Dashboard</h1>

                <div className={styles["panel"]}>
                    <div className={styles["panel_btn"]}>users</div>
                    <div className={styles["panel_btn_active"]}>magick</div>
                </div>
                <div className={styles['create_container']}>
                    <h3>Create user</h3>
                    <Button type="primary" onClick={this.createHandler}>Create</Button>
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        {select}
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <Button type="success" onClick={this.saveHandler}>Save</Button>
                    </form>
                </div>
                <div className={styles['dashboard_container_name']}>
                <table className={styles['table']}>
                    <thead className={styles['thead']}>
                        <tr className={styles['tr']}>
                            <th className={styles['th']}>ID</th>
                            <th className={styles['th']}>First name</th>
                            <th className={styles['th']}>Last name</th>
                            <th className={styles['th']}>Email</th>
                            <th className={styles['th']}>Login</th>
                            <th className={styles['th']}>Birthday</th>
                            <th className={styles['th']}>Role</th>
                            <th className={styles['th']}>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles['tbody']}>
                        <tr className={styles['tr']}>
                            <td className={styles['td']}>000001</td>
                            <td className={styles['td']}>Lani</td>
                            <td className={styles['td']}>Ovendale</td>
                            <td className={styles['td']}>lovendale0@w3.org</td>
                            <td className={styles['td']}>beeeb</td>
                            <td className={styles['td']}>3.05.2020</td>
                            <td className={styles['td']}>admin</td>
                            <td className={styles['td']}><a href="/">edit</a> | <a href="/">edit</a></td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td className={styles['td']}>000002</td>
                            <td className={styles['td']}>Israel</td>
                            <td className={styles['td']}>Tassell</td>
                            <td className={styles['td']}>itassell1@ow.ly</td>
                            <td className={styles['td']}>2beeeb</td>
                            <td className={styles['td']}>3.05.2020</td>
                            <td className={styles['td']}>admin</td>
                            <td className={styles['td']}><a href="/">edit</a> | <a href="/">edit</a></td>
                        </tr>
                        <tr className={styles['tr']}>
                            <td className={styles['td']}>000003</td>
                            <td className={styles['td']}>Eveleen</td>
                            <td className={styles['td']}>Mercer</td>
                            <td className={styles['td']}>emercer2@ow.ly</td>
                            <td className={styles['td']}>beeeb</td>
                            <td className={styles['td']}>3.05.2020</td>
                            <td className={styles['td']}>admin</td>
                            <td className={styles['td']}><a href="/">edit</a> | <a href="/">edit</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

        )
    }
}
//TODO: для админа нужно уметь добавлять, удалять, редактировать юзеров
//TODO: для юзера данный борд не доступен
//TODO: таблицу показывать отдельно
